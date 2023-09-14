import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SymptomcheckerService {
sessionId!:string
passphrase:string=`I%20have%20read,%20understood%20and%20I%20accept%20and%20agree%20to%20comply%20with%20the%20Terms%20of%20Use%20of%20EndlessMedicalAPI%20and%20Endless%20Medical%20services.%20The%20Terms%20of%20Use%20are%20available%20on%20endlessmedical.com`
  constructor(private http:HttpClient) { }
  sessioninit(){
    const httpoptions={
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache'
      })
    }
const body ={

}

    this.http.get('http://localhost:8080/init-session',{}).subscribe((res:any)=>{
      this.sessionId=res.SessionID
      console.log(this.sessionId)
      this.http.post(`http://api-prod.endlessmedical.com/v1/dx/AcceptTermsOfUse?SessionId=${this.sessionId}&passphrase=${this.passphrase}`,httpoptions).subscribe((res)=>console.log(res))


    })



  }
  analyze(){
    
    return this.http.get(`http://localhost:8080/analyze?SessionID=${this.sessionId}`)
  }
  delete(feature:any){
    this.http.post(`http://localhost:8080/delete?SessionID=${this.sessionId}&name=${feature.name}&value=${feature.choiceNumber}`,{}).subscribe((res)=>{console.log(res)})
  }
  update(features:any[]){
    for(let feature of features){
      this.http.post(`http://localhost:8080/update?SessionID=${this.sessionId}&name=${feature.name}&value=${feature.choiceNumber}`,{}).subscribe((res)=>{})
  
      }
  }
}
