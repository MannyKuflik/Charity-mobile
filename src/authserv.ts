import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MenuPage } from './pages/menu/menu';
//import { NavController } from 'ionic-angular';

@Injectable()

export class AuthServ {

    constructor(public http: Http/*, public navCtrl: NavController*/) {

    }

    getBaseUrl() {
        //return "http://localhost:3000";
        return "https://full-smacked-api.herokuapp.com";
    }

    login(email: string, password: string, callback: Function) {
        this.http
            .post(this.getBaseUrl() + "/login", {
                email: email,
                password: password
            })
            .subscribe(
                result => {
                    console.log(result);
                    var response = result.json();

                    localStorage.setItem("TOKEN", response.token);
                    // this.navCtrl.setRoot(MenuPage);
                    //this.navCtrl.popToRoot();

                    callback();

                    //this.navCtrl.push(DonationsPage)
                },
                error => {
                    alert("Invalid Credentials");
                    callback(error);
                });
    }

}