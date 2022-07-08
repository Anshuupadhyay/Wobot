import image from '../Assets/logo.png'
import './Ui.css'
import Tag from './tag'
const Ui=()=>{

    return(
      <div>
        <div className='logo'>
        <img src={image} />
        </div>
<div className='whole'>

        <div className='content'>
            <div className='header'>
            <div className='solidlines'>
                <table cellSpacing="6px">
                    <tr>
                        <td>
                        <div className='solid1'>
                         </div>
                        </td>
                        <td>
                        <div className='solid2'>
                         </div>
                        </td>
                        <td>
                        <div className='solid3'>
                         </div>
                        </td>
                    </tr>
                </table>
               
                
            </div>
            <h1>It’s a delight to have you onboard</h1>
            <h4>Help us know you better.
                <br/>
(This is how we optimize Wobot as per your business needs)</h4>

</div>

<div className='formfields'>
            <form>
    <label className='label1'>Company Name</label>
    <br/>
        <input class="company" type="text" placeholder='e.g. Example Inc'></input>
        <br/>
        <label className='label2'>Industry</label>
        
            <select name="select" className='select'>
            <option value='amazon'>amazon</option>
            <option value='flipkart'>flipkart</option>
            <option value='Wobot'>Wobot</option>
            </select>
            <br/>
            <label className='label3'>Company size</label>
           
        
            </form>
            </div>
            
        </div>

        
</div>
<div className='terms'>
    <h6>Terms of use  |  Privacy policy </h6>
</div>
    </div>
    )
}

export default Ui;