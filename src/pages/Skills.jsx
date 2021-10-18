import { data } from 'jquery'
import React from 'react'
import LanguageComponent from '../Components/LanguageComponent'


export default function Skills() {
    return (
        <div className="p-4">           
            <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                <div className="card-body">
                    <h1 className="card-title text-center">Skills</h1>
                    <div className="row">
                        <div className="card shadow-lg p-3 mb-5 mx-3 bg-body rounded col-sm">
                            <h5 className="text-center">Languages</h5>
                            <LanguageComponent/>
                        </div>
                        <div className="card shadow-lg p-3 mb-5 mx-3 bg-body rounded col-sm">
                            <h5 className="text-center">Frameworks</h5>
                            
                        </div>
                        <div className="card shadow-lg p-3 mb-5 mx-3 bg-body rounded col-sm">
                            <h5 className="text-center">Tools</h5>
                              
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
