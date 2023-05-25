import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "resourceQuotaBytes"
})
export class PipesResourceQuotaBytesComponent implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    if (args && args[0] !== 'memory') {
      return ''+value;
    }

    if (!value) {
      return '0 Bytes';
    }

    const k = 1024;
    const dm = 2;
    const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];

    const i = Math.floor(Math.log(value) / Math.log(k));

    return `${parseFloat((value / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }

}
