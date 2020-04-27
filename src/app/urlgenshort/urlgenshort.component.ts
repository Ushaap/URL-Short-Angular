import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UrlshortnerService } from '../urlshortner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-urlgenshort',
  templateUrl: './urlgenshort.component.html',
  styleUrls: ['./urlgenshort.component.css']
})
export class UrlgenshortComponent implements OnInit {

  form;
  list;
  

   constructor(private urlshortservice:UrlshortnerService, private router: Router) {
    this.form = new FormGroup({
      'URL': new FormControl('',Validators.required), 
     

     
    }) 

    this.urlshortservice.getURLs().subscribe((data) => {
      this.list = data;
    })
  }

  ngOnInit(): void {

  }
    postURL() {
      if (this.form.valid) {
        this.urlshortservice.postURL(this.form.value).subscribe((url)=>{
           this.router.navigate([''])
        })
      }

    }
  }
  