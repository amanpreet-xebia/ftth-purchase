/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import StadiumButton from '../../components/stadiumButton';
import '../../style/style.css';
import { useTranslation } from 'react-i18next';

function TermsAndCondition(props: TermsAndConditionProp) {
  const { t } = useTranslation();
  return (
    <>
      {props.showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-2">
            <div className="relative w-auto my-6 mx-10 md:mx-auto max-w-min">
              <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pt-14">
                {/*body*/}
                <div className="items-center">
                  <div className=" absolute right-10 top-10 ">
                    <svg
                      onClick={() => {
                        props.setShowModal(false);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div className="  text-center text-2xl font-bold ">
                    {t('terms_conditions')}
                  </div>
                </div>
                <div className=" overflow-scroll-gradient text-salamblue">
                  <div className=" px-10  py-8 font-normal overflow-y-scroll h-685 leading-8 tracking-normal">
                    <h2
                      className="h4 mb-5 aos-init aos-animate text-salamblue font-medium text-xl"
                      data-aos="fade-left"
                    >
                      Subscription Terms &amp; Conditions
                    </h2>
                    <h5 className="text-salamgreen leading-8 font-semibold">
                      1. DEFINITIONS:
                    </h5>
                    <p>
                      The following words and abbreviations shall have the
                      meanings assigned below, unless the context requires
                      otherwise:{' '}
                    </p>
                    <p>
                      “Agreement” shall mean this agreement including any
                      referenced documents and applicable CITC Terms of Service.{' '}
                      <br />
                      “CITC” means the Communication Information Technology
                      Commission in the Kingdom of Saudi Arabia. <br />
                      “Salam or Company" means Integrated Telecom Company Ltd.
                      <br />
                      “Equipment” shall mean the equipment required to receive,
                      access and operate the Service(s).
                      <br />
                      “Service(s)” means services provided by Salam to the
                      Subscriber in accordance with the Subscription Agreement
                      Form.
                      <br />
                      “Subscriber” shall mean the individual, a corporation, or
                      a legal entity who incurs usage charges for the Service.
                      <br />
                      “Subscription Period” shall mean the period the Subscriber
                      agreed to procure the Service described in the
                      Subscription Agreement Form.
                      <br />
                      “Subscription Agreement Form” means the Subscriber’s
                      request to avail Services and an acceptance of the charges
                      stipulated therein in accordance with this Agreement.
                    </p>
                    <h5 className="text-salamgreen leading-8 font-semibold pt-4">
                      2. ORDER OF PRECEDENCE:
                    </h5>
                    <p>
                      {' '}
                      Service(s) provided by Salam under this Agreement will be
                      governed by CITC Protection of Telecommunication and
                      Information Technology User’s Rights, Regulations and
                      Terms of Services July 2020 G(available here) (approved by
                      CITC decision No. (423/1441) dated 27/12/1441
                      correspondent to 16/08/2020G and this Agreement
                      respectively.
                    </p>
                    <h5 className="text-salamgreen leading-8 font-semibold pt-4">
                      3. AGREEMENT TERM:
                    </h5>
                    <p>
                      {' '}
                      The term of this Agreement shall be one year equivalent to
                      the Subscription Period selected by the Subscriber in the
                      Subscription Agreement Form (the “Initial Term”) which
                      shall commence on the service activation date. This
                      Agreement term shall renew automatically for an equal
                      period as the Initial Term (each a “Renewal Term”) unless
                      terminated in accordance with the terms of this Agreement.
                    </p>
                    <h5 className="text-salamgreen leading-8 font-semibold pt-4">
                      4. PROVISIONS:
                    </h5>
                    <p>
                      4.1. Salam use the DHCP (Dynamic Host Configuration
                      Protocol) that enables to automatically assign an IP
                      address for the Service.
                      <br />
                      4.2. Title and intellectual property rights to the Service
                      are owned by Salam, its agents, suppliers, affiliates or
                      their licensors or otherwise by the owners of such
                      material are protected by copyright laws and treaties.
                      <br />
                      4.3. Subscriber shall not resell, share, or distribute the
                      Service or any portion thereof to any third party without
                      the prior express written consent of Salam as this Service
                      is offered to serve one residential unit.
                      <br />
                      4.4. The Subscriber has the right to obtain a copy of this
                      Agreement.
                      <br />
                      4.5. The Subscriber shall be responsible for the accuracy
                      of the data and information provided to Salam and shall
                      notify the Salam about any change thereto.
                      <br />
                      4.6. Salam shall supply the procured Services to the
                      Subscriber a) after the fulfillment of subscription
                      conditions and b) subject to availability of i) Salam
                      network resources; ii) required facilities at Subscriber
                      site.
                      <br />
                      4.7. The Subscriber shall be responsible for protecting
                      the devices provided by Salam against viruses or damages
                      that may affect the device performance. In case the device
                      fails due to misuse or negligence of the Subscriber, the
                      Subscriber agrees to pay an amount equivalent to the value
                      of cost of repair or replacement.
                      <br />
                      4.8. The Subscriber agrees to provide Salam with any
                      information that it requires for establishing and/or
                      auditing and/or administering the Subscriber’s accounts
                      and facilities therewith and authorize it to obtain and
                      collect any information as it deems necessary or in need
                      regarding the Subscriber’s accounts and facilities
                      therewith, from the Saudi Credit Bureau (SIMAH) and to
                      disclose and share (inclusive of data pooling) that
                      information to the said company (SIMAH) or to any other
                      agency approved by Saudi Arabian Monetary Agency (SAMA).
                      Salam shall use Absher Verification service to validate
                      Subscriber authenticity.
                    </p>
                    <h5 className="text-salamgreen leading-8 font-semibold pt-4">
                      5. PAYMENTS:
                    </h5>
                    <p>
                      5.1. Subscriber agrees to pay all charges and fees
                      associated with the use of the Service(s) as specified in
                      the Subscription Agreement Form.
                      <br />
                      5.2. For postpaid packages: Subscriber agrees to pay one
                      month subscription fee as a deposit prior to service
                      activation which shall be a) refunded to the Subscriber at
                      the end of the Initial Term; or b) set off against fees
                      payable for the last subscription month of the Initial
                      Term. Subject deposit amount shall not be refunded in the
                      event Subscriber terminate this Agreement prior to the
                      completion of the Initial Term
                      <br />
                      5.3. The Subscriber shall pay the value of the
                      devices/modem and installation expenses for the subscribed
                      Service to Salam either a) in monthly installments or b)
                      as lump sum value based on the type of Service unless such
                      costs are included in the Subscription Agreement Form as
                      part of a promotion.
                      <br />
                      5.4. Salam may announce special pricing offers with lower
                      subscription rates and such rates may or may not apply to
                      this Agreement
                      <br />
                      5.5. If the Subscriber opt-in for credit card auto payment
                      mandate service, Subscriber’s designated credit card shall
                      be automatically charged each time when the subscription
                      fees are due for the subscribed Services.
                      <br />
                      5.6. In case of cancellation of the credit card assigned
                      under auto payment mandate, at least thirty (30) days
                      prior to such cancellation, the Subscriber must call Salam
                      customer call center (Tel:8005000000) or inform in writing
                      at the nearest Salam office and provide an alternate
                      payment method acceptable to Salam.
                    </p>
                    <h5 className="text-salamgreen leading-8 font-semibold pt-4">
                      6. SERVICE RELOCATION, SUSPENSION AND TERMINATION:
                    </h5>
                    <p>
                      6.1. Salam may suspend or terminate this Agreement, if the
                      Subscriber fails to comply with any term of this Agreement
                      or due to non-payment of the fees by the Subscriber or if
                      requested by CITC.
                      <br />
                      6.2. Subscriber’s request for any of the below listed
                      services which could be availed by calling Salam contact
                      center or by visiting an Salam office shall be subject to
                      the payment of the applicable fees stated therein.
                    </p>
                    <p></p>
                    <table className="table termConditionCss bg-white my-4">
                      <thead>
                        <tr className="bg-red-500 text-white">
                          <th scope="col">#</th>
                          <th scope="col">Request type*</th>
                          <th scope="col">Fees – SR</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">A</th>
                          <td>
                            Relocation (subject to availability of network
                            resources)
                          </td>
                          <td>SAR 615</td>
                        </tr>
                        <tr>
                          <th scope="row">B</th>
                          <td>Suspension (maximum of 12 months)</td>
                          <td>53 per month</td>
                        </tr>
                        <tr>
                          <th scope="row">C</th>
                          <td>
                            Early termination of 12 months Subscription Period
                          </td>
                          <td>
                            130** for each remaining month of the Subscription
                            Period
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p></p>
                    <p>
                      * The above mentioned fees are excluding the Value Add
                      Tax. <br />* *The cost of a) installation and activation =
                      900 + b) device/modem = 660 Total 1560/Subscription
                      Period.
                    </p>
                    <h5 className="text-salamgreen leading-8 font-semibold pt-4">
                      7. LIMITATION OF WARRANTY AND LIABILITY:
                    </h5>
                    <p>
                      7.1. Unless expressly stated herein or CITC Terms of
                      Service:
                      <br />
                      7.1.1. All representations and warranties of any kind
                      express or implied, including, without limitation, any
                      warranties (1) non-infringement or (2) protecting the
                      Subscriber from the dangers of the internet and hacking
                      (3) of Service fitness for other purposes or
                      merchantability, are hereby excluded.
                      <br />
                      7.1.2. Salam or its content providers shall not be liable
                      for any direct, indirect, incidental, special, punitive or
                      consequential losses or any other foreseeable or
                      unforeseeable loss resulting directly or indirectly in
                      connection with the Service(s) that may be suffered by the
                      Subscriber.
                      <br />
                      7.1.3. Salam shall not liable for Service degradation
                      inside the Subscriber’s premises due to structural
                      obstacles.
                    </p>
                    <h5 className="text-salamgreen leading-8 font-semibold pt-4">
                      8. AGREEMENT:
                    </h5>
                    <p>
                      8.1. This Agreement constitutes the entire agreement
                      between Salam and Subscriber.
                      <br />
                      8.2. In case any contradictions between the English and
                      the Arabic version of this Agreement, the Arabic version
                      shall prevail.
                    </p>
                    <h5 className="mt-5">
                      By signing this Agreement Subscriber acknowledges and
                      accepts these terms and conditions which will govern
                      Subscriber’s relationship with Salam and Subscriber
                      acknowledges receipt of a copy of this Agreement.
                    </h5>
                  </div>
                </div>
                <div className=" self-center  mx-10 mb-7 mt-5">
                  <div className="w-64">
                    <StadiumButton
                      text={t('yes_accept')}
                      onClick={() => props.onClick(true)}
                    ></StadiumButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
type TermsAndConditionProp = {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  dialogText: string;
  onClick: (isAgreed: boolean) => void;
};

export default TermsAndCondition;
