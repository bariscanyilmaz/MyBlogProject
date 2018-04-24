import { Component} from '@angular/core';
import { DataService } from './service';

@Component({
    selector: 'blog-app',
    templateUrl: './Views/blog.component.html'
})

export class BlogComponent {
    name = "Blog Component"; blogList: any[]; url: string = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40ylmazbarscan"; constructor(private service: DataService) { }

    public  getRepos() {this.service.getRepos(this.url).subscribe(result => { this.blogList = result.items },error => { alert(error); },);}

    ngOnInit() { this.getRepos();}
}