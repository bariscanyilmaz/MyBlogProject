import { contactPost } from './contact.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = new HttpHeaders({'Content-Type': 'application/json'});

@Injectable()
export class DataService {

    constructor(private httpClient:HttpClient) { }

    public getRepos(url: string) { return this.httpClient.get<any>(url);}

    public post(model: contactPost) { let url = "http://bariscanyilmazblog.azurewebsites.net/api/Contact/PostForm"; return this.httpClient.post(url, model, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }) }
}