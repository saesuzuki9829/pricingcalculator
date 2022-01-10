import React from 'react'
import { Accordion } from 'react-bootstrap'

const PrivacyPolicy = () => {
    return (
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
        <Accordion.Header>Privacy Policy</Accordion.Header>
        <Accordion.Body>
        <p>
        This website is operated by Saé Suzuki. 
        I am committed to protecting and preserving the privacy of our visitors 
        when visiting our site or communicating electronically with us.
        This policy sets out how I process any personal data I collect 
        from you or that you provide to us through our website. 
        I confirm that I will keep your information secure and that 
        I will comply fully with all applicable UK Data Protection legislation and regulations. 
        By visiting my website, you are accepting and 
        consenting to the practices described in this policy.
        </p>
  </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    )
}

export default PrivacyPolicy
