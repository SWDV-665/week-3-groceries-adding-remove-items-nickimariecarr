import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {NavController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

//app title on the page 
  title = "Grocery";
//grocery items that will output 
  items = [
    {
      name: "Milk",
      quantity: 2    
    },
    {
      name: "Bread",
      quantity: 1    
    },
    {
      name: "Banana",
      quantity: 3    
    },
    {
      name: "Sugar",
      quantity: 1    
    },
  ];



  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public toastCtrl: ToastController ) {}
//removing items code 
  async removeItem(item: { name: string; quantity:string;},index:any) {
    console.log("Removing Item - ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Removing Item - ' + item.name + " ...",
      duration: 3000
    });
    toast.present();
    this.items.splice(index,1);
  }

  //adding items code 
  async addItem(){
    console.log("Adding Item");
    this.showAddItemPrompt();}

//pop up that allows items to be manually added 
  async showAddItemPrompt(){
      const prompt =await this.alertCtrl.create({
        message: "Please enter item...",
        inputs: [
          {
            //name of item will be entered when user is prompted to enter info
            name: 'name',
            placeholder: 'Name'
          },
          {
          //quantity of item will be entered 
            name: 'quantity',
            placeholder: 'Quantity'
          },
        ],
        buttons: [
          {
            //input can be canceled 
            text: 'Cancel',
            handler: _data => {
              console.log('Cancel clicked');
            }
          },
          {
            //user can save input 
            text: 'Save',
            handler: item => {
              console.log('Saved clicked', item);
              this.items.push(item);
            }
          }
        ]
      });
      await prompt.present();
    }
  
  }