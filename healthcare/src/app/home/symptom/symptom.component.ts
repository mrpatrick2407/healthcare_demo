import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Chart } from 'chart.js';

import { SymptomcheckerService } from 'src/app/service/symptomchecker.service';

const cancel = `
<svg style="width:60px;height:60px;position:absolute;top:0px;right:-5px " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><g><path d="M50,24.634c-13.987,0-25.366,11.379-25.366,25.366S36.013,75.366,50,75.366S75.366,63.987,75.366,50   S63.987,24.634,50,24.634z M50,73.366c-12.884,0-23.366-10.482-23.366-23.366S37.116,26.634,50,26.634S73.366,37.116,73.366,50   S62.884,73.366,50,73.366z"/><path d="M59.27,43.454c0-0.728-0.284-1.412-0.798-1.926c-1.029-1.029-2.824-1.029-3.853,0L50,46.146l-4.619-4.619   c-1.062-1.062-2.79-1.063-3.853,0c-0.515,0.514-0.798,1.198-0.798,1.926c0,0.728,0.284,1.412,0.798,1.926l4.619,4.619l-4.619,4.619   c-0.515,0.514-0.798,1.198-0.798,1.926s0.284,1.412,0.798,1.926c1.029,1.029,2.824,1.029,3.853,0L50,53.852l4.619,4.619   c0.515,0.515,1.199,0.798,1.927,0.798c0.728,0,1.412-0.284,1.926-0.798c0.515-0.514,0.798-1.198,0.798-1.926   s-0.284-1.412-0.798-1.926l-4.619-4.619l4.619-4.619C58.987,44.866,59.27,44.182,59.27,43.454z"/></g></svg>
s`;
@Component({
  selector: 'app-symptom',
  templateUrl: './symptom.component.html',
  styleUrls: ['./symptom.component.css'],
})
export class SymptomComponent {
  symptomFormGroup: FormGroup;
  symptoms!: any[];
  checked1: boolean = false;
  chartdata: any;
  keys: any[] = [];
  values: any[] = [];
  options: any;
  selectedFeatures: any[] = [
    {
      category: 'Cardiovascular review of system',
      choiceNumber: 3,
      choiceText:
        'Yes. On both sides. (i.e. both lower extremities - symmetric or close to symmetric).',
      laytext: 'How about swelling on your legs?',
      name: 'EdemaRos',
      text: 'Any history of edema on lower extremities/dependent body areas?',
      type: 'categorical',
    },
  ];
  showForm = false;
  searchstring!: string;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private service: SymptomcheckerService
  ) {
    this.symptomFormGroup = this.fb.group({
      selectedSymptom: [''],
      categorical: [''],
      numerical: [''],
      searchTxt: [''],
    });
    iconRegistry.addSvgIconLiteral(
      'cancel',
      sanitizer.bypassSecurityTrustHtml(cancel)
    );
    service.sessioninit();
    this.chartdata = {
      labels: ['Arterial hypertension (chronic) secondary to obesity', 'Deep vein thrombosis (DVT)', 'Acute right ventricle heart failure', 'Superficial vein thrombosis (SVT) of lower extremities', 'Arterial hypertension (chronic) secondary to OSA', 'Uncontrolled hypertension.', 'Hypoxic respiratory failure', 'Nephrotic syndrome', 'Hypertensive emergency', 'Headache due to uncontrolled hypertension.'],
      datasets: [
        {
          label: 'Possible Percentage',
          data: ['0.08071135430916554', '0.06161137440758291', '0.039999999999999925', '0.035834266517357216', '0.03257042254134268', '0.03053435114503822', '0.019616832847895393', '0.01431238332296203', '0.014046822742474818', '0.012891344383057057'],
        },
      ],
    };
    this.options = {
      plugins: {
        title: {
          display: true,
          text: 'Possible Diagnosis',
          font: {
            weight: 'bold',
            size: '30px',
            position: 'relative',
            left: '30px',
          },
          align: 'center',
        },
        legend: {
          position: 'right', // Place the legends below the chart
        },
      },
    };
  }

  ngOnInit(): void {
    this.http.get<any[]>('assets/SymptomsOutput.json').subscribe((data) => {
      this.symptoms = data.slice(0, 100);
    });
    this.symptomFormGroup.get('searchTxt')?.valueChanges.subscribe((res) => {
      this.searchstring = res;
    });
  }

  addSymptom() {
    this.showForm = true;
  }

  isNumericType(): boolean {
    const selectedSymptomValue =
      this.symptomFormGroup.get('selectedSymptom')?.value;

    return (
      selectedSymptomValue?.type === 'double' ||
      selectedSymptomValue?.type === 'integer'
    );
  }

  isCategoricalType(): boolean {
    const selectedSymptomValue =
      this.symptomFormGroup.get('selectedSymptom')?.value;
    return selectedSymptomValue?.type === 'categorical';
  }
  submitForm() {
    const selectedSymptomValue =
      this.symptomFormGroup.get('selectedSymptom')?.value;
    console.log(selectedSymptomValue);
    const numerical = this.symptomFormGroup.get('numerical')?.value;
    const categorical = this.symptomFormGroup.get('categorical')?.value;
    console.log(categorical);
    this.selectedFeatures.push({
      name: selectedSymptomValue.name,
      text: selectedSymptomValue.text,
      laytext: selectedSymptomValue.laytext ? selectedSymptomValue.laytext : '',
      category: selectedSymptomValue.category,
      type: selectedSymptomValue.type,
      choiceNumber: categorical ? categorical : numerical,
      choiceText:
        selectedSymptomValue.choices &&
        selectedSymptomValue.choices[categorical]
          ? selectedSymptomValue.choices[categorical].text
          : '',
    });
    this.symptomFormGroup.reset();
    this.service.update(this.selectedFeatures);
    console.log(this.selectedFeatures[1]);
  }
  delete(i: number) {
    this.service.delete(this.selectedFeatures[i])

    this.selectedFeatures.splice(i, 1);
  }

  analyze() {
    this.service.analyze().subscribe((res: any) => {
      const data = res.Diseases;
      for (let dat of data) {
        console.log(Object.keys(dat));
        this.keys.push(...Object.keys(dat));
        this.values.push(...Object.values(dat));
      }

      this.chartdata = {
        labels: this.keys,
        datasets: [
          {
            label: 'Possible Percentage',
            data: this.values,
          },
        ],
        backgroundColor: [
          '#fe9620',
          '#e5de30',
          '#1d87ae',
          '#dc3ef1',
          '#8ed9a9',
          '#ffd40d',
          '#84a1a2',
          '#c6bdfb',
          '#c879c5',
          '#26db37',
          '#3c9cfc',
        ],
        hoverBackgroundColor: [
          '#fe9620',
          '#e5de30',
          '#1d87ae',
          '#dc3ef1',
          '#8ed9a9',
          '#ffd40d',
          '#84a1a2',
          '#c6bdfb',
          '#c879c5',
          '#26db37',
          '#3c9cfc',
        ],
      };
    });
  }
}
