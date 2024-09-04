import IndexPage from 'src/pages/IndexPage.vue'  //src\pages\IndexPage.vue ใช้คำสั่ง relative path
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('ทดสอบข้อมูลส่วนตัว  (private)', () => { //ทดสอบข้อมูลส่วนตัว ชื่อ นามสกุล รหัส ชื่อเล่น
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
    .toBe('ชื่อ')
  });
  
  it('ทดสอบชื่อ (firstName)', () => {
    const wrapper = shallowMount(IndexPage, {
      data () {
        return {
          title: 'พัชราภรณ์'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('พัชราภรณ์')
  })

  it('ทดสอบนามสกุล (surname)', () => {
    const wrapper = shallowMount(IndexPage, {
      data () {
        return {
          title: 'อุดมโภชน์'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('อุดมโภชน์')
  })

  it('ทดสอบรหัสนักศึกษา (Number)', () => {
    const wrapper = shallowMount(IndexPage, {
      data () {
        return {
          title: '6604101357'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('6604101357')
  })

  it('ทดสอบชื่อเล่น (nickname)', () => {
    const wrapper = shallowMount(IndexPage, {
      data () {
        return {
          title: 'ฝน'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('ฝน')
  })
})

// test('ทดสอบวาสมีฟอร์ม (form)', () => {
//     const wrapper = shallowMount(IndexPage)
//     expect(wrapper.find('form').exists()).toBe(true)
//   })

//   test('ทดสอบว่าในฟอร์ม (form) มีการรันค่า (input)', () => {
//     const wrapper = shallowMount(IndexPage)
//     expect(wrapper.find('form > input').exists()).toBe(true)
//   })

//   test('ทดสอบว่ามีปุ่ม (button)', () => {
//     const wrapper = shallowMount(IndexPage)
//     expect(wrapper.find('button').exists()).toBe(true)
//   })