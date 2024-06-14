import React from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';

const Trending = () => {

    const onTabChange = (tab) =>{
        
    }
  return (
    <div className="relative mb-16">
        <ContentWrapper>
            <span className="text-2xl text-white font-normal">Trending</span>
            <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange}/>
        </ContentWrapper>
    </div>
  )
}

export default Trending;
