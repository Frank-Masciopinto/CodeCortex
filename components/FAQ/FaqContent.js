import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqContent = () => {
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>FAQ</span>
            <h2>Frequently Ask Questions</h2>
          </div>

          <div className="faq-accordion">
            <Accordion preExpanded={["a"]}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What is your experience in web development?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    We have a rigorous hiring process that ensures we only bring
                    on the best talent. Our developers are extensively tested to
                    pass the same standard as a Google Senior Developer
                    interview. This ensures that our team is highly skilled,
                    knowledgeable, and able to deliver exceptional results for
                    our clients.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What is your approach to developing a customized solution?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    We work closely with our clients to understand their
                    specific business needs and tailor our approach to provide a
                    customized solution that meets those needs.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Do you provide after-sales support?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, we offer 30 days of free after-sales support to ensure
                    that your web development solution is running smoothly and
                    effectively. Our team is available to answer any questions
                    and provide technical support to ensure that your website or
                    application is performing optimally.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What technologies do you use for web development?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Our team uses the latest technologies and programming
                    languages to develop web applications, including React,
                    Angular, Node.js, Python, and Ruby on Rails.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="e">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Can you help with website redesigns?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, we can help with website redesigns to improve the user
                    experience and optimize your website for search engines.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="f">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How long does it take to develop a custom web application?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The timeline for developing a custom web application depends
                    on the scope of the project and specific business
                    requirements. Contact us to discuss your project and get an
                    estimate.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem uuid="g">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What is your process for project management and
                    communication?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    We use agile project management methodologies to ensure
                    efficient project delivery and effective communication with
                    our clients throughout the development process.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem uuid="h">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Do you provide maintenance and updates for web applications?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, we provide ongoing maintenance and updates for web
                    applications to ensure that they continue to meet your
                    business needs and function effectively over time. Contact
                    us to learn more about our maintenance and support services.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem uuid="i">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What programming languages and tools do you use for
                    blockchain development?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Our team of blockchain developers is skilled in a variety of
                    programming languages and tools, including Solidity,
                    Ethereum, Hyperledger Fabric, and Corda. We work closely
                    with our clients to determine the best solution for their
                    specific needs and requirements.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem uuid="l">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How long does it take to develop a custom blockchain
                    solution?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The timeline for blockchain development varies depending on
                    the complexity of the project and the specific requirements
                    of the client. However, our team is committed to delivering
                    high-quality solutions in a timely and efficient manner. We
                    work closely with our clients to establish clear timelines
                    and ensure that we meet or exceed their expectations.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem uuid="m">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Do you offer web development services for aliens?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    👾 As much as we'd love to work with extraterrestrial life
                    forms, our expertise is limited to the human realm. However,
                    we can assure you that our team of developers is out of this
                    world when it comes to delivering top-notch solutions!👾
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
