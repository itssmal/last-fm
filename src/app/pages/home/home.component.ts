import {Component, HostListener, OnInit} from '@angular/core';
import {ChartService} from '../../core/services/chart.service';
import {MetaInterface, Track} from '../../core/models/track.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isLoading = false
  public tracks: Track[] = []
  public metaData: MetaInterface
  public defaultImgSrc = 'assets/images/defaultImg.png'
  public page = 1
  public collectionSize = 1
  public paginationItems = []
  public screenWidth: number
  public alertText: string

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
    this.countPagination()
  }

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.getTopChart(this.page)
    this.screenWidth = window.innerWidth;
  }

  public async getTopChart(page): Promise<void> {
    this.isLoading = true
    try {
      let res = await this.chartService.getTopChart(page).toPromise()
      this.tracks = res.track
      for (let el of this.tracks) {
        el.image = el.image.filter(img => img.size === 'extralarge')
      }
      this.metaData = res['@attr']
      this.countPagination()
    } catch (e) {
      console.log(e)
      this.alertText = e?.error?.message
    } finally {
      this.isLoading = false
    }
  }

  public countPagination(): void {
    this.collectionSize = parseInt(this.metaData.totalPages)
    let pagesArr = Array.from(Array(this.collectionSize).keys())
    if (this.screenWidth < 768) {
      this.paginationItems = pagesArr.filter(el => (el <= this.page && el !== 0 && el > this.page - 2) || (el > this.page && el < this.page + 2))
    } else
    this.paginationItems = pagesArr.filter(el => (el <= this.page && el !== 0 && el > this.page - 5) || (el > this.page && el < this.page + 5))
  }

  public onPageChange(page): void {
    this.page = page
    this.getTopChart(page)
  }

  public navToTrackPage(url: string): void {
    let win = window.open(url, '_blank')
    win.focus()
  }
}
