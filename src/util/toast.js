import Toast from 'react-native-root-toast';

class ToastContainer {
    toast = null;
    static info = (content) => {
        this.toast && Toast.hide(this.toast)
        this.toast = Toast.show(content, {
            duration: 3000,
            position: Toast.positions.CENTER,
            shadow: false,
            opacity: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            containerStyle: {
                paddingLeft: 15,
                paddingRight: 15
            }
        })
    }
}


export default ToastContainer;
