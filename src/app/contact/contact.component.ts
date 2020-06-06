import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from'@angular/forms';
import {ProductService} from '../product.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
messageform;
message;
  constructor(private productservice:ProductService) { 
    this.messageform = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      name:new FormControl('',[Validators.required]),
      phone:new FormControl(''),
      txtmsg:new FormControl('',[Validators.required])
     
      
    })
  }

  ngOnInit(): void {
  }
  processdata()
  {
    if(this.messageform.valid)
    {
    console.log(this.messageform.value)
    this.productservice.sendmessage(this.messageform.value).subscribe((data)=>{
      console.log(data)
      console.log(data.message)
      if(data.message==="sent")
      {
        this.message ="MESSAGE SENT SUCCESSFULLY"
        console.log("success")
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        this.messageform.reset();
      }
      else
      {
        this.message ="MESSAGE SENT FAILED"
        console.log("failed")
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }

    })
    }
  }


}
