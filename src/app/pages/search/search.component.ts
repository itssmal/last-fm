import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../core/services/search.service';
import {FormBuilder, FormControl} from '@angular/forms';
import {Track} from '../../core/models/track.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public isLoading = false
  public isSearching = false
  public tracks: Track[] = []
  public defaultImgSrc = 'assets/images/defaultImg.png'
  public hitEnterMessage = ''
  public alertText: string

  public form = this.formBuilder.group({
    searchQuery: new FormControl('')
  })

  constructor(private searchService: SearchService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  get query(): string {
    return this.form.get('searchQuery').value
  }

  public async search(): Promise<void> {
    this.hitEnterMessage = ''
    if (this.query.length !== 0) {
      this.isSearching = true
      try {
        let res = await this.searchService.searchTrack(this.query).toPromise()
        this.tracks = res.trackmatches.track
        for (let el of this.tracks) {
          el.image = el.image.filter(img => img.size === 'extralarge')
        }
        console.log(res)
      } catch (e) {
        this.alertText = e?.error?.message
        console.log(e)
      } finally {
        this.isSearching = false
      }
    }
  }

  public onInputChange(): void{
    if (this.query.length === 0) {
      this.tracks = []
      this.isSearching = false
    } else if (this.tracks.length === 0 && this.form.dirty) {
      this.hitEnterMessage = 'Hit Enter to start search'
    }
  }

  public navToTrackPage(url: string) {
    let win = window.open(url, '_blank')
    win.focus()
  }
}
