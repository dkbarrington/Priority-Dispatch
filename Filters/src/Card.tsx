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
    items: Company[]
}


const Card = ({ items }: Props) => {

    return (
        <>
            <div className="container-fluid mt-3">
                <div className="row justify-content-center">
                    {items.map((comp, index) => {

                        return (
                            <div
                                className="col-md-4 col-sm-6 "
                                key={index}
                            >
                                <div className="card px-3 py-2 mb-4 dropShadow">
                                    <div className="addToCompare">Add to Compare <input type="checkbox"></input></div>
                                    <div className="card-img-top text-center">
                                    </div>
                                    <div className="card-body">
                                        <div className="card-title">
                                            <div className="card-text">{comp.name}</div>
                                        </div>
                                        <div className="d-flex justify-content-around">
                                            {comp.medical && <div><span className="material-symbols-outlined med">
                                                medical_services
                                            </span>Medical</div>}
                                            {comp.fire && <div><span className="material-symbols-outlined fire">
                                                local_fire_department
                                            </span>Fire</div>}
                                            {comp.police && <div><span className="material-symbols-outlined police">
                                                local_police
                                            </span>Police</div>}
                                        </div>
                                        <div className="d-flex justify-content-around mt-2 checks text-center">
                                            {comp.multi_disc && <div><span className="material-symbols-outlined check">check</span>
                                                Multi-Disc. Launcher</div>}
                                            {comp.sms && <div><span className="material-symbols-outlined check">check</span>
                                                SMS Texting Capable</div>}
                                            {comp.dispatch_narrative && <div><span className="material-symbols-outlined check">check</span>
                                                Dispatch Narrative</div>}
                                            {comp.mdc_mdt && <div><span className="material-symbols-outlined check">check</span>
                                                MDC / MDT</div>}

                                        </div>
                                    </div>
                                </div>
                            </div>

                        );
                    })}
                </div>
            </div >
        </>
    )
};

export default Card;