import backroundwallpaper from '../background.jpg'

function Alert(props){ 
    

    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div>
 
    
        <div style={{height:'50px' , backgroundImage:`url(${backroundwallpaper})`,marginLeft:0,marginRight:0,paddingLeft:0,paddingRight:0}}>
            {
                props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}</div>
            }
        </div>
        </div>
    )
}

export default Alert
