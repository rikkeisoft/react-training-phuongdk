import React from 'react';
function tablecontent(props) {
    return (
        <div>
            {
            props.home &&
            <table className="table table-bordered table-hover">
                <tbody>
                    <tr>
                        <td className="info">Application Name</td>
                        <td className="content">{props.home.app_name}</td>
                    </tr>    
                    <tr>
                        <td className="info">Description</td>
                        <td className="content">{props.home.description}</td>
                    </tr>    
                    <tr>
                        <td className="info">Copyright</td>
                        <td className="content">{props.home.copyright}</td>
                    </tr>
                </tbody>
            </table>
            }
            {
            props.info &&
            <table className="table table-bordered table-hover">
                <tbody>
                    <tr>
                        <td className="info">Application Name</td>
                        <td className="content">{props.info.app_name}</td>
                    </tr>    
                    <tr>
                        <td className="info">Description</td>
                        <td className="content">{props.info.app_description}</td>
                    </tr>    
                    <tr>
                        <td className="info">Author</td>
                        <td className="content">{props.info.author}</td>
                    </tr>    
                    <tr>
                        <td className="info">Division</td>
                        <td className="content">{props.info.division}</td>
                    </tr>    
                </tbody>
            </table>
            }       
         </div>
    );
}
export default tablecontent;