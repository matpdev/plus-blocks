import { create } from 'zustand';
import produce from 'immer';
import { ReactNode } from 'react';
export interface IState {
  show: boolean;
  title: string;
  body?: ReactNode;
  icon?: string;
}
export interface IActions {
  reset: () => void;
  setShow: (show: boolean) => void;
  setTitle: (title: string) => void;
  setBody: (body?: ReactNode) => void;
  setIcon: (icon?: string) => void;
  toggle: () => void;
  create: (title: string, body?: ReactNode, icon?: string) => void;
}
export interface IStore {
  state: IState;
  actions: IActions;
}
export const useStore = create<IStore>((set) => {
  const setState = (fn: any) => set(produce<IStore>(fn));
  const initialState: IState = {
    show: false,
    title: '',
    body: undefined,
    icon: 'success',
  };
  return {
    state: {
      ...initialState,
    },
    actions: {
      reset: () => set({ state: { ...initialState } }),
      setShow: (show: boolean) =>
        setState(({ state }: IStore) => {
          state.show = show;
        }),
      setTitle: (title: string) =>
        setState(({ state }: IStore) => {
          state.title = title;
        }),
      setBody: (body?: ReactNode) =>
        setState(({ state }: IStore) => {
          state.body = body;
        }),
      setIcon: (icon?: string) =>
        setState(({ state }: IStore) => {
          state.icon = icon;
        }),
      toggle: () =>
        setState(({ state }: IStore) => {
          state.show = !state.show;
        }),
      create: (title: string, body?: ReactNode, icon?: string) =>
        setState(({ state }: IStore) => {
          state.title = title;
          state.body = body;
          state.show = true;
          state.icon = icon;
        }),
    },
  };
});
