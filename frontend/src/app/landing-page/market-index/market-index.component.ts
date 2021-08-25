import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-market-index',
  templateUrl: './market-index.component.html',
  styleUrls: ['./market-index.component.css']
})

export class MarketIndexComponent implements OnInit {

  url: string;

  metaData:any;

  priceData:any = {
    x: [],
    open: [],
    close: [],
    high: [],
    low: [],
    increasing: {line: {color: 'green'}}, 
    decreasing: {line: {color: 'red'}}, 
    line: {color: 'black'}, 
    type: 'candlestick', 
    xaxis: 'x', 
    yaxis: 'y'
  }

  currentPrice: any;
  priceChange: any;
  pricePercentageChange: any;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8000/snp500"
  }

  setHistoricalPrices() {
    // this.http.get<any>(this.bitcoinUrl)
    //                 .subscribe((data) => {
    //                   this.bitcoinPrice = data
    //                   console.log("bitcoin price", this.bitcoinPrice)
    //                 })

    this.http.get<any>(this.url)
              .subscribe((response) => {
                this.priceData.x = response.data.date;
                this.priceData.open = response.data.open;
                this.priceData.close =  response.data.close;
                this.priceData.high = response.data.high;
                this.priceData.low = response.data.low;

                this.metaData = response.meta;

                this.currentPrice = this.priceData.close[this.priceData.close.length-1]

                this.priceChange = this.currentPrice - this.priceData.close[this.priceData.close.length-2]
                this.priceChange = Math.round(this.priceChange * 100) / 100;

                this.pricePercentageChange = this.priceChange / this.currentPrice
                this.pricePercentageChange = Math.round(this.pricePercentageChange * 10000) / 100
              })

  }

  ngOnInit(): void {
    this.setHistoricalPrices()
  }

}
