const createNewEnquiry = `
mutation PostEnquiryData(
    $itemid: Int!
    $firstname: String!
    $lastname: String!
    $apistatus: Int = 0
    $companyname: String
    $comments: String
    $phone: String!
    $altPhone: String
    $email: String!
    $custentity_min_no_of_guests: Int
    $custentity_max_no_of_guests: Int
    $custentity_duration_type: String
    $custentity_duration: String
    $custentity_lead_cruise_date: String
    $custentity_number_person: String
    $custentity_how_did_you_hear_about_us: String
    $custentity_event_type: String
    $custentity_est_start_time: String
    $custentity_product_name_magento: String
    $description: String!
  ) {
    createNewEnquiry(
      input: {
        itemid: $itemid
        firstName: $firstname
        lastName: $lastname
        apistatus: $apistatus
        companyName: $companyname
        comments: $comments
        phone: $phone
        altPhone: $altPhone
        email: $email
        custentity_min_no_of_guests: $custentity_min_no_of_guests
        custentity_max_no_of_guests: $custentity_max_no_of_guests
        custentity_duration_type: $custentity_duration_type
        custentity_duration: $custentity_duration
        custentity_lead_cruise_date: $custentity_lead_cruise_date
        custentity_number_person: $custentity_number_person
        custentity_how_did_you_hear_about_us: $custentity_how_did_you_hear_about_us
        custentity_event_type: $custentity_event_type
        custentity_est_start_time: $custentity_est_start_time
        custentity_product_name_magento: $custentity_product_name_magento
        description: $description
      }
    ) {
      apisuccess
      enquiryid
    }
  }
`;

export default createNewEnquiry;
