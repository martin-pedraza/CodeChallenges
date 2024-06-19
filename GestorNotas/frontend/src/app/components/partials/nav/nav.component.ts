import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { TagService } from '../../../services/tag.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  tags: any = [];

  constructor(private userService: UserService, private router: Router, private tagService: TagService){}

  ngOnInit(): void {
    this.tagService.getTags().subscribe(data => {
      this.tags = data.tags;
    })
  }

  routerTo(route: string) :void{
    this.router.navigate([`/${route}`]);
  }

  logout() :void{
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
