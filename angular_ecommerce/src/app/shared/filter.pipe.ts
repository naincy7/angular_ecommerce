import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[], filterString:string,propName:string): any[] {
    const result:any=[];
if(!value || filterString===''||propName===' ')
    return value;
value.forEach( (a: any) =>{
  // console.log(a["id"]);
  // console.log(a.id)
   if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase()))
   result.push(a);
})
return result;
  }

}
