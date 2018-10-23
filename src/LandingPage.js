import React from 'react'
import PropTypes from 'prop-types'
import ExperimentBox from './ExperimentBox'
import HomePagePanel from './HomePagePanel'

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
  	return (
	  	 <div className="row">
		    <div className="small-12 columns">
		        <h3>Human Cell Atlas Experiments</h3>

		        <div className="row">
		            <div className="small-1 column">
		                <p><img src={"assets/img/HCA-logo.jpg"}/></p>
		            </div>

		            <div className="small-11 columns">
		                <p>
		                    Thanks to funding from the <a href="https://www.humancellatlas.org/">HCA</a> project,
		                    Expression Atlas contains <b>791</b>
		                    <a href="/gxa/experiments?kingdom=plants">plant experiments</a>, studying
		                    e.g.
		                    <a href="/gxa/experiments?organism=Arabidopsis+thaliana">Arabidopsis</a>,
		                    <a href="/gxa/experiments?organism=Oryza+sativa">rice</a>, and
		                    <a href="/gxa/experiments?organism=Zea+mays">maize</a>.
		                </p>
		                <p>
		                    The <i>baseline</i> experiments, are either RNA-seq or proteomics, and display expression levels of
		                    gene products under 'normal' conditions (e.g. normal rice tissues). Each experiment is manually curated
		                    to a high standard, and RNA expression levels are calculated using the
		                    <a href="https://github.com/nunofonseca/irap">iRAP</a> pipeline.
		                </p>
		                <p>
		                    The <i>differential</i> experiments in Atlas, containing both microarray and RNA-seq data, allows users
		                    to query which genes are up-/down-regulatedin different experimental conditions, e.g. 'in Arabidopsis
		                    shoots, what genes are upregulated in plants treated by X?'
		                </p>
		            </div>
		        </div>
		    </div>
		    <ExperimentBox key={`baseline`} title={`Baseline Experiment`}/>
		  	<ExperimentBox key={`differential`} title={`Differential Experiment`}/>
		</div>
  	)

  }
}

LandingPage.propTypes = {
  atlasUrl: PropTypes.string
}

export default LandingPage
