import React from "react";
import Image from "next/image";

function Address() {
  return (
    <>
      <div className="w-full lg:w-1/2 px-5 py-5">
        
        <div className="rounded-4xl overflow-hidden mb-5 shadow shadow-sm-gray">
          <iframe
            className="w-full h-[300px] rounded-4xl"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.71402447053!2d78.00608491114274!3d30.30220187468975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092a2d24f81e09%3A0x6da05749c2ea2cd0!2sMother&#39;s%20Doon%20Kitchen%2FKitchen%20Studio!5e0!3m2!1sen!2sin!4v1718511812321!5m2!1sen!2sin"
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7423973.68319178!2d70.14690784312177!3d24.69296845748289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092a2d24f81e09%3A0x6da05749c2ea2cd0!2sMother&#39;s%20Doon%20Kitchen%2FKitchen%20Studio!5e0!3m2!1sen!2sin!4v1718511648383!5m2!1sen!2sin"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Address;
