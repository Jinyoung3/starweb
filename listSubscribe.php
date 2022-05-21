<?php
    // Put your MailChimp API and List ID hehe
    $api_key = '9de7c3cf2900bf8b4559d3e61a44b797-us11';
    $list_id = '660f151cc5';
 
    // Let's start by including the MailChimp API wrapper
    include('MailChimp.php');
    // Then call/use the class
    use \DrewM\MailChimp\MailChimp;
    $MailChimp = new MailChimp($api_key);
 
    // Submit subscriber data to MailChimp
    // For parameters doc, refer to: http://developer.mailchimp.com/documentation/mailchimp/reference/lists/members/
    // For wrapper's doc, visit: https://github.com/drewm/mailchimp-api
    $result = $MailChimp->post("lists/$list_id/members", [
                            'email_address' => $_POST["email"],
                            'merge_fields'  => ['FNAME'=>$_POST["fname"], 'LNAME'=>$_POST["lname"]],
                            'status'        => 'subscribed',
                        ]);
 
    if ($MailChimp->success()) {
            header("Access-Control-Allow-Origin: *");
            header('Content-type: application/json');
                $response = array();
                $response = array(
                    'status' => 'success'
                );

            echo json_encode($response);
    } else {
        header("Access-Control-Allow-Origin: *");
            header('Content-type: application/json');
                $response = array();
                $response = array(
                    'status' => 'failed'
                );

            echo json_encode($response);
    }
?>