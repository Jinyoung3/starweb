"""
  pip install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib
"""



from __future__ import print_function

import os.path
import io
import re
import csv

from pathlib import Path
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from oauth2client.service_account import ServiceAccountCredentials
from googleapiclient.http import MediaIoBaseDownload

# If modifying these scopes, delete the file token.json.
SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

# The ID and range of a sample spreadsheet.
SPREADSHEET_ID = '1U-CKckKsy56E8ZlMhI50SlW9rm9I5bIbyrlBezqnCGA'
RANGE_NAME = 'Live to Website!A2:I'
creds = None

def main():
    """Shows basic usage of the Sheets API.
    Prints values from a sample spreadsheet.
    """
    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('credentials.json'):
        global creds
        creds = ServiceAccountCredentials.from_json_keyfile_name('credentials.json')

    #update_subpage('example')
    #update_profiles()

def update_subpage(subteam):
    # this links to the example subpage, temporary
    csv_arr = get_sheet('1wmR7i11WlGgfyfEJCJQ5x7z0n-efnkF9NdIbXP8zGQI', 'Sheet1!A1:E')

    # I know this isn't pythonic but the pythonic way recreates a new 2d array not allowing for modification
    for i in range(1, len(csv_arr[5])):
        proj_id = get_sheet_id(csv_arr[5][i])
        csv_arr[5][i] = proj_id
        # itterate through projects
        proj_csv_arr = get_sheet(proj_id, 'Sheet1!A1:Z')
        # itterate through porject pictures
        for j in range(1, len(proj_csv_arr[2])):
            proj_pic_id = get_image_id(proj_csv_arr[2][j])
            with open('../data/'+subteam+'/'+proj_pic_id+'.jpg', 'wb') as imgfile:
                imgfile.write(download_file_data(proj_pic_id))
            proj_csv_arr[2][j] = proj_pic_id
        save_sheet(proj_csv_arr, '../data/'+subteam+'/'+proj_id+'.csv')

    save_sheet(csv_arr, '../data/'+subteam+'/main.csv')

def update_profiles():
    csv_arr = get_sheet(SPREADSHEET_ID, RANGE_NAME)

    for row in csv_arr:
        parsed_name = parse_name(row[1])

        with open('../images/members/'+parsed_name+'.jpg', 'wb') as imgfile:
            imgfile.write(download_file_data(real_file_id=get_image_id(row[6])))
        row[6] = parsed_name

    with open('../data/member_profiles.csv', 'w') as member_csv:
        writer = csv.writer(member_csv, delimiter=',')
        writer.writerows(csv_arr)

def save_sheet(csv_arr, location):
    with open(location, 'w') as csv_file:
        writer = csv.writer(csv_file, delimiter=',')
        writer.writerows(csv_arr)

def parse_name(name):
    return re.sub(r'[^a-zA-Z ]+', '', name).rstrip().replace(' ', '_')

def get_image_id(image_url):
    return image_url[image_url.index('id=')+3:]

def get_sheet_id(sheet_url):
    print(sheet_url)
    return sheet_url[sheet_url.index('/d/')+3:sheet_url.index('/d/')+3+44]

def get_sheet(sheet_id, sheet_range):
    try:
        service = build('sheets', 'v4', credentials=creds)

        # Call the Sheets API
        sheet = service.spreadsheets()
        result = sheet.values().get(spreadsheetId=sheet_id,
                                    range=sheet_range).execute()
        values = result.get('values', [])
        # if not values:
        #     print('No data found.')
        #     return
        # for row in values:
        #     # Print columns A and E, which correspond to indices 0 and 4.
        #     print('%s, %s' % (row[0], row[4]))
    except HttpError as err:
        print(err)

    return values

def download_file_data(real_file_id):
    try:
        # create drive api client
        service = build('drive', 'v3', credentials=creds)

        file_id = real_file_id

        # pylint: disable=maybe-no-member
        request = service.files().get_media(fileId=file_id)
        file = io.BytesIO()
        downloader = MediaIoBaseDownload(file, request)
        done = False
        while done is False:
            status, done = downloader.next_chunk()
            print(F'Download {int(status.progress() * 100)}.')

    except HttpError as error:
        print(F'An error occurred: {error}')
        file = None

    return file.getvalue()

if __name__ == '__main__':
    main()
