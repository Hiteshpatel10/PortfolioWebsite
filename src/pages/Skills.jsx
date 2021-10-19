import { data } from 'jquery'
import React from 'react'
import LanguageComponent from '../Components/LanguageComponent'
import FrameworkComponent from '../Components/FrameworkComponent'
import ToolsComponents from '../Components/ToolsComponents'


export default function Skills() {
    return (
        <div className="p-4 m-3">           
            <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                <div className="card-body">
                    <h1 className="card-title text-center">Skills</h1>

                    <div className="container mt-4">
                        <div className="row ml-1 mr-1">
                            <LanguageComponent/>
                            <FrameworkComponent/>
                            <ToolsComponents/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
