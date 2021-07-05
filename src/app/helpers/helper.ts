import Swal from 'sweetalert2/dist/sweetalert2.js';

const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000
});
export class SuccessToast {
    public static show(message) {
        return new Promise((resolve, reject) => {
            Toast.fire({
                type: 'success',
                title: 'Success',
                text: message
            }).then(() => {
                resolve();
            }).catch(() => {
                reject();
            });
        });
    }
}