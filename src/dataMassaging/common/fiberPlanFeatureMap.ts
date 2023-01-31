/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import Images from '../../components/images';

const imageByAdonType = (type: string) => {
  let map: Map<string, any> = new Map([
    ['place holder 5102', Images.bestSeller],
    ['place holder 5102', Images.voice],
    ['place holder 5102', Images.streaming],
    ['orbit', Images.addons_type],
  ]);

  return map.get(type) ?? Images.logo;
};

const labelAdonType = (type: string) => {
  let map: Map<string, string> = new Map([
    ['salam_plan31', 'POSTPAID'],
    ['salam_plan32', 'LANDLINE'],
    ['salam_plan33', 'ADD-ONS'],
  ]);

  return map.get(type);
};

const editLabelByAdonType = (type: string) => {
  let map: Map<string, string> = new Map([
    ['salam_plan31', 'edit selection'],
    ['salam_plan32', 'edit selection'],
    ['salam_plan33', 'View all add-ons'],
  ]);

  return map.get(type) ?? 'edit selection';
};

const displayPriceByAdonType = (type: string, price?: string) => {
  return type === 'salam_plan31' ? price : 'Free' ?? '';
};

const displayLandLineNumber = (type: string) => {
  return type === 'salam_plan32'
    ? '011 234 5678'
    : '12 months subscription' ?? '';
};

export {
  imageByAdonType,
  labelAdonType,
  editLabelByAdonType,
  displayPriceByAdonType,
  displayLandLineNumber,
};
