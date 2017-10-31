import { shallow, mount } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import App from '@/App.vue';
import Hello from '@/components/Hello.vue';

describe("App.vue", () => {
    it('加载App组件', () => {
        const app = mount(App);
        expect(app.name()).toBe('app');
    });
    
    it('加载Hello组件', () =>{
        const app = mount(App);
        expect(app.contains(Hello)).toBe(true);
        
        const HelloComponent = app.find(Hello);
        const vm = HelloComponent.vm;
        expect(vm.msg).toBe('Welcome to Your Vue.js App');
    });
    
    it('matches snapshot', () => {
        const app = mount(App);
        const renderer = createRenderer();

        renderer.renderToString(app.vm, (err, str) => {
            if (err) throw new Error(err)
            expect(str).toMatchSnapshot()
        })
    });
        
});