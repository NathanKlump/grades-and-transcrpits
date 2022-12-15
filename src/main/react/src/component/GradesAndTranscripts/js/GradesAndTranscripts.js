import React from 'react';
import IconLinkRow from '../../IconLinkRow/js/IconLinkRow';
import '../../IconLinkRow/css/IconLinkRow.css';

class GradesAndTranscripts extends React.Component {
  state={
        renderData : [],
  }

  constructor(props) {
    super(props);
  }

    componentDidMount(){
      fetch('/GradesAndTranscripts/Linkinfo').then(async (res) => {
          let data = await res.json();
          this.setState(
              {
                  renderData : data,
              }
          )
      })
      .catch((e) => {console.log('err')})
    }


  render() {
  let data = this.state.renderData;

    return (
      <React.Fragment>
        <div className="parent-app-icons">
         {
                    data.map(function(rowData, index){
                        return(
                        <IconLinkRow
                                            imageName = {rowData.imageName}
                                            linkText = {rowData.linkText}
                                            linkUrl = {rowData.linkURL} />
                        )
                    })
         }

        <IconLinkRow 
            imageName = {'grades.png'}
            linkText = {'Final Grades'}
            linkUrl = {'https://bstussb.oakland.edu:8443/StudentSelfService/ssb/studentGrades'} />
        <IconLinkRow
            imageName = {'script-text-outline.png'}
            linkText = {'View Transcript'}
            linkUrl = {'https://sail.oakland.edu/PROD/bwskotrn.P_ViewTermTran'} />
        <IconLinkRow
            imageName = {'script-text-outline.png'}
            linkText = {'Request Official Mailed Transcript'}
            linkUrl = {'https://sail.oakland.edu/PROD/bwskwtrr.p_disp_transcript_address'} />
        <IconLinkRow
            imageName = {'script-outline.png'}
            linkText = {'Request eTranscripts'}
            linkUrl = {'https://secure.studentclearinghouse.org/sssportalui/faces/SSSPortal'} />
        <IconLinkRow
            imageName = {'calculator.png'}
            linkText = {'GPA Calculator'}
            linkUrl = {'https://mysail.oakland.edu/uPortal/p/gpa-calculator.ctf1/max/render.uP'} />
        </div>
      </React.Fragment>
    );
  }
};

export default GradesAndTranscripts;