import Link from 'next/link';
import React, { useContext } from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
 import { BsInstagram } from 'react-icons/bs';
 import { BsYoutube } from 'react-icons/bs';
 import { BsSnapchat } from 'react-icons/bs';
 import { BsTwitter } from 'react-icons/bs';
import SelectedFiberBottomSheet from '../common/SelectedFiberBottomSheet';
import AppContext from '../AppContext';

function Footer() {
  const data = useContext(AppContext);
  const { footerLinks: {terms, security, privacy, salamVersion}, footer } = data.state.languages;
  
  
  const lang = '';
  return (
    <footer>
      <SelectedFiberBottomSheet />
      <div className=" w-screen bg-salam-blue py-5 align-bottom pb-12 md:pb-5 md:px-12 self-end px-4 text-sm  md:text-sm">
        <div className="text-white flex  flex-col md:flex-row gap-6 md:gap-8 place-items-center">
          <div className="items-center self-center">{salamVersion}</div>

          <div className="  flex justify-around gap-6 md:gap-8 text-center">
            <div>
              <a href={`https://salam.sa/${lang}/support/terms-conditions`} target="_blank" rel="noreferrer">
                {terms}
              </a>
            </div>
            <div>
              <a href={`https://salam.sa/${lang}/support/security-policy`} target="_blank" rel="noreferrer">
                {security}
              </a>
            </div>
            <div>
              <a href={`https://salam.sa/${lang}/support/privacy-policy`} target="_blank" rel="noreferrer">
                {privacy}
              </a>
            </div>
          </div>
          <div className=" flex-1"></div>
          <div className="flex-none flex flex-row gap-6 md:gap-8">
            <div>
              <BsTwitter size={20} />
            </div>
            <div>
              <BsFacebook size={20} />
            </div>
            <div>
              <BsLinkedin size={20} />
            </div>
            <div>
              <BsInstagram size={20} />
            </div>
            <div>
              <BsYoutube size={20} />
            </div>
            <div>
              <BsTwitter size={20} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
