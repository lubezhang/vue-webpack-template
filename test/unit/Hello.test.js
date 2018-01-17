import { shallow, mount } from 'vue-test-utils';
import Hello from '@/components/Hello.vue';

describe("Hello.vue", () => {
    const hello = shallow(Hello);
    it('默认数据', () => {
        const name = hello.name();
        expect(name).toBe('hello');

        const msg = hello.find('h1').text();
        expect(msg).toBe('Welcome to Your Vue.js App');
    });

    it('改变H1的消息', () => {
        const changeBtn = hello.find('#changeBtn');
        changeBtn.trigger('click');

        const msg = hello.find('h1').text();
        expect(msg).toBe('change msg!');
    });
});
