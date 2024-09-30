import React from "react";

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

type Props = {
    setItems: (arr: Company[]) => void;
    data: Company[]
}


const Filters = ({ setItems, data }: Props) => {

    const filterItems = (event: React.ChangeEvent<HTMLSelectElement>): void => {

        const value = event.target.value;

        if (value === 'all') {
            setItems(data);
        } else {
            const newItemArr = data.filter((company) => {
                switch (value) {
                    case 'medical':
                        return company.medical === true;
                    case 'police':
                        return company.police === true;
                    case 'fire':
                        return company.fire === true;
                    default:
                        return false;
                }

            });

            setItems(newItemArr);
        }



    };

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex align-items-center dropdownBar">
                        <div className="allFilters">All Filters <span className="material-symbols-outlined redMenu">menu</span></div>
                        <div className="filterBox">
                            Discipline
                            <select name="discipline" id="discipline" onChange={filterItems}>
                                <option value="all">All</option>
                                <option value="medical">Medical</option>
                                <option value="fire">Fire</option>
                                <option value="police">Police</option>
                            </select>
                        </div>
                        <div className="filterBox">
                            Multi-Discipline Launcher
                            <select name="multiDisciplineLauncher" id="multiDisciplineLauncher">
                                <option value="all">All</option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                        <div className="filterBox">
                            SMS Texting Capable
                            <select name="SMStexting" id="SMStexting">
                                <option value="all">All</option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                        <div className="filterBox">
                            KQ's and/or DE's can be Displayed in color within:
                            <select name="displayInColor" id="displayInColor">
                                <option value="1">Dispatch Narrative</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};

export default Filters;