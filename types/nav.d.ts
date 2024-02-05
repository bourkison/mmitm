import {StackScreenProps} from '@react-navigation/stack';

export type HomeStackParamList = {
    Home: undefined;
    Search: {
        type: 'beginning' | 'middle' | 'end';
    };
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
    StackScreenProps<HomeStackParamList, T>;

declare global {
    namespace ReactNavigation {
        interface HomeParamList extends HomeStackParamList {}
    }
}
