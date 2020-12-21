import React from 'react'
import UpdateAccount from "./UpdateAccount";

const Setting = () => {
    return (
        <div className="bg-black bg-clip-border bg-settingBG bg-contain bg-no-repeat min-h-screen">
            <div className="w-full flex md:flex-row flex-col flex-wrap items-center justify-around">
                <UpdateAccount />
            </div>
        </div>
    )
}

export default Setting;
