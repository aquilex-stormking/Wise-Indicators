import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ChartData,ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Kansas } from '../../../interfaces/interfaces2';
import { KansasService } from '../../../services/kansas/kansas.service';

@Component({
  standalone: true,
  imports: [MatCardModule,BaseChartDirective],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css'

})
export default class ChangeDetectionComponent implements OnInit {
  resultados: any = [];
  resultados2: any =[];
  resultados_data: any = [];
  resultados_data2: any = [];
  labels2: any = [];

  precipitation: any = [];
  colors: string[] = [
    'rgb(75, 192, 192)',
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 206, 86)',
    'rgb(153, 102, 255)',
    'rgb(255, 159, 64)',
    'rgb(201, 203, 207)',
    'rgb(255, 99, 71)',
    'rgb(147, 112, 219)',
    'rgb(144, 238, 144)',
    'rgb(173, 216, 230)',
    'rgb(238, 130, 238)'
  ];
  // chartData: ChartData<'bar'>;
  temperatures: any[] = [];
  kansas?: Kansas;
  isLoading: boolean = false;
  data: ChartData<'bar'> ={
    labels:['Temperature (°F)'],
    datasets: this.temperatures.map(item => ({
      label: item.label,
      data: [item.data]
    }))
  };
  data2: ChartData<'line'> ={
    labels:this.labels2,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };


  public getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    return this.colors[randomIndex];
  }
  

  constructor(private kansasService:KansasService ) {  }
  ngOnInit(): void {
   this.get();
  }

  public get(){
    this.isLoading = true; 
    this.kansasService.getData().subscribe(
      {
      next:(colum:Kansas|undefined) =>{
        this.kansas = colum;
        this.resultados = this.kansas?.properties.periods
        this.resultados.forEach((element:any) => {
          // list = any = {'name'}; 
          
          this.precipitation.push(element.probabilityOfPrecipitation.value !== null && element.probabilityOfPrecipitation.value !== undefined ? element.probabilityOfPrecipitation.value : 0);
          this.resultados_data = {
            label:element.name,
            data:[element.temperature],
            backgroundColor: this.getRandomColor(),
          };
          this.labels2.push(element.name);
          this.temperatures.push(this.resultados_data);
        });
        this.isLoading = false; 
        this.resultados_data2  = {
          data:this.precipitation,
          borderColor: this.getRandomColor(),
          fill: false,
          tension: 0.1,
          label:"probabilityOfPrecipitation"
        }
        this.resultados2.push(this.resultados_data2)

        this.data.datasets = this.temperatures;
        this.data2.datasets = this.resultados2;

      },
      error: (error) => {
        console.log(error);
        this.isLoading = false; // Ocultar el GIF de carga en caso de error
      }
    })
  }
}
