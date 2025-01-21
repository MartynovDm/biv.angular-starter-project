import { SelectableItem } from '../../../../pages/policy/model/policy.model';

export interface CustomChipsModel<T> extends SelectableItem<T> {
  disabled?: boolean;
}
