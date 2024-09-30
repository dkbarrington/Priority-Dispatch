import { useState, useEffect } from 'react';
import Card from './Card';
import Filters from './Filters';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

type Company = {
  index: number,
  name: string,
  certification: string,
  medical: boolean,
  fire: boolean,
  police: boolean,
  multi_disc: boolean,
  sms: boolean,
  dispatch_narrative: boolean,
  mdc_mdt: boolean
}


const data: Company[] = [
  {
    index: 0,
    name: 'RapidDeploy',
    certification: 'Titanium',
    medical: true,
    fire: true,
    police: true,
    multi_disc: false,
    sms: false,
    dispatch_narrative: false,
    mdc_mdt: false
  },
  {
    index: 1,
    name: 'Alert Public Safety Solutions',
    certification: 'Platinum',
    medical: true,
    fire: true,
    police: true,
    multi_disc: true,
    sms: true,
    dispatch_narrative: false,
    mdc_mdt: false
  },
  {
    index: 2,
    name: 'Alpine Software Corp.',
    certification: 'Platinum',
    medical: false,
    fire: false,
    police: true,
    multi_disc: false,
    sms: false,
    dispatch_narrative: true,
    mdc_mdt: false
  },
  {
    index: 3,
    name: 'Archonix Systems CCCAD',
    certification: 'Platinum',
    medical: true,
    fire: true,
    police: true,
    multi_disc: false,
    sms: false,
    dispatch_narrative: false,
    mdc_mdt: false
  },
  {
    index: 4,
    name: 'Archonix Systems XCAD',
    certification: 'Platinum',
    medical: true,
    fire: true,
    police: false,
    multi_disc: false,
    sms: false,
    dispatch_narrative: true,
    mdc_mdt: false
  },
  {
    index: 5,
    name: 'Baltimore County 911',
    certification: 'Platinum',
    medical: true,
    fire: true,
    police: true,
    multi_disc: true,
    sms: true,
    dispatch_narrative: false,
    mdc_mdt: true
  },
  {
    index: 6,
    name: 'Bell Public Safety Group',
    certification: 'Platinum',
    medical: true,
    fire: true,
    police: true,
    multi_disc: false,
    sms: false,
    dispatch_narrative: true,
    mdc_mdt: false
  },
  {
    index: 7,
    name: 'CAI - Computer Arts, Inc.',
    certification: 'Platinum',
    medical: true,
    fire: true,
    police: true,
    multi_disc: false,
    sms: true,
    dispatch_narrative: false,
    mdc_mdt: true
  },
  {
    index: 8,
    name: 'Centralsquare Technologies',
    certification: 'Platinum',
    medical: true,
    fire: true,
    police: true,
    multi_disc: false,
    sms: false,
    dispatch_narrative: false,
    mdc_mdt: false
  },
  {
    index: 9,
    name: 'Centralsquare Technologies - FDM',
    certification: 'Gold',
    medical: true,
    fire: true,
    police: true,
    multi_disc: false,
    sms: false,
    dispatch_narrative: true,
    mdc_mdt: true
  },
  {
    index: 10,
    name: 'Centralsquare Technologies - PDF',
    certification: 'Gold',
    medical: true,
    fire: true,
    police: true,
    multi_disc: false,
    sms: true,
    dispatch_narrative: true,
    mdc_mdt: true
  },

];

function App() {
  const createCategory = (itemArr: Company[], category: string) => {
    const tempArr = [];

    for (let i = 0; i < itemArr.length; i++) {
      if (itemArr[i].certification === category) tempArr.push(itemArr[i]);
    }
    return tempArr;
  };

  const [items, setItems] = useState(data);
  const [titanium, setTitanium] = useState(createCategory(data, 'Titanium'));
  const [platinum, setPlatinum] = useState(createCategory(data, 'Platinum'));
  const [gold, setGold] = useState(createCategory(data, 'Gold'));

  useEffect(() => {
    setTitanium(createCategory(items, 'Titanium'));
    setPlatinum(createCategory(items, 'Platinum'));
    setGold(createCategory(items, 'Gold'));
  }, [items]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className='col-12'>
            <h1>Option 1: Add Filters to Cards</h1>
            <p className="subtitle">Using the provided data, enable filters to adjust visibility of the cards following the design/prototype below</p>
            <input type='text' className='searchInput' placeholder='Search'></input><span className="material-symbols-outlined searchIcon">search</span>
          </div>
        </div>
        <Filters setItems={setItems} data={data} />
        <div className='row'>
          <div className='col-12'>
            {titanium.length > 0 &&
              <>
                <div className='CADheading'>Titanium Certified CADs</div>
                <Card items={titanium} />
              </>
            }

            {platinum.length > 0 &&
              <>
                <div className='CADheading'>Platinum Certified CADs</div>
                <Card items={platinum} />
              </>
            }

            {gold.length > 0 &&
              <>
                <div className='CADheading'>Gold Certified CADs</div>
                <Card items={gold} />
              </>
            }

          </div>
        </div>
      </div>
    </>
  );
}

export default App
