import React from 'react'
import logo from '../Assets/hitesh.png'
import kotlin from '../Assets/kotlin.png'
import c from '../Assets/c.png'
import java from '../Assets/java.png'

export default function LanguageComponent() {
    return (
        <div className="card ml-4 mr-4 shadow p-3 mb-5 bg-white rounded col-sm">
        <h5 className="text-center">Framework</h5>

        <div className="p-3">
            <div class="row">
                <div class="row justify-content-md-center">
                    <div class="col col-lg-2">
                        <img src={kotlin} alt="afdbj" height="auto" width="40px" className=""/>
                    </div>
                    <div class="col-md-auto">
                        <h5 className="p-2 ml-3">kotlin</h5>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="row justify-content-md-center">
                    <div class="col col-lg-2">
                        <img src={kotlin} alt="afdbj" height="auto" width="40px" className=""/>
                    </div>
                    <div class="col-md-auto">
                        <h5 className="p-2 ml-3">kotlin</h5>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="row justify-content-md-center">
                    <div class="col col-lg-2">
                        <img src={kotlin} alt="afdbj" height="auto" width="40px" className=""/>
                    </div>
                    <div class="col-md-auto">
                        <h5 className="p-2 ml-3">kotlin</h5>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}
