import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionServiceService } from 'src/app/auth/usuarios/services/autenticacion.service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  authentificated: boolean = false;
  constructor(
    public authService: AutenticacionServiceService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe( (resp: any) => {
      if(resp.uid){
        this.authentificated = this.authService.isLoggedIn;
      }
      else{
        this.authentificated = this.authService.isLoggedIn;
      }
    }
    );
    
  }

  logout(){
    this.authService.establecerRol('')

    this.router.navigate(['/']);

  }

}
