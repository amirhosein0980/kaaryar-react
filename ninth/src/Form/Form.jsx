import './Form.css';
import { useState } from 'react';
import HandleInput from "../HandleInput/HandleInput";
import emailweak from "../weak-email.json";
import passwordweak from "../weak-passwords.json";

function Form() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [repeatpassword, setrepeatpassword] = useState('');
    const [city, setcity] = useState('');
    const [gender, setgender] = useState('');
    const [checkbox, setcheckbox] = useState('');
    const [errorname, seterrorname] = useState('');
    const [erroremail, seterroremail] = useState('');
    const [errorpassword, seterrorpassword] = useState('');
    const [errorrepeatpassword, seterrorrepeatpassword] = useState('');
    const [errorcity, seterrorcity] = useState('');
    const [errorgender, seterrorgender] = useState('');
    const [errorcheckbox, seterrorcheckbox] = useState('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    const previousemail = emailweak.map((weak) => weak.email);
    const previouspassword = passwordweak.map((weak) => weak.password);
    
    
    

    function handelname(event) {
        let nametrim = event.target.value;
        nametrim = nametrim.trim();
        setname(nametrim);

        if (!nametrim) {
            seterrorname('نام و نام خانوادگی اجباری است.')
        } else {
            seterrorname('')
        }
    };

    function handelemail(event) {
        let emailtrim = event.target.value;
        emailtrim = emailtrim.trim();
        setemail(emailtrim);

        if (!emailtrim) {
            seterroremail('ایمیل، اجباری است.');
        } else if (!emailRegex.test(email)) {
            seterroremail('ساختار ایمیل معتبر نیست.');
        }if (previousemail.includes(emailtrim)) {
            seterroremail('ایمیل وارد شده تکراری است.')
        }else {
            seterroremail('');
        }
    };

    function handelpassword(event) {
        const newPassword = event.target.value;
        setpassword(newPassword)

        if (!newPassword) {
            seterrorpassword('رمز عبور، اجباری است.')
        } else if (newPassword.length < 8) {
            seterrorpassword('طول رمزعبور باید حداقل 8 کاراکتر باشد.')
        } else if (!passwordRegex.test(newPassword)) {
            seterrorpassword('رمزعبور باید حداقل شامل یک حرف بزرگ انگلیسی، یک حرف کوچک انگلیسی و یک عدد باشد.')
        } else if (previouspassword.includes(newPassword)) {
            seterrorpassword('رمز عبور وارد شده، در لیست رمزهای عبور ضعیف است.')
        } else {
            seterrorpassword('')
        }
    };

    function handelrepeatpassword(event) {
        const newrepearpasswoed = event.target.value;
        setrepeatpassword(newrepearpasswoed)

        if (!newrepearpasswoed) {
            seterrorrepeatpassword('تکرار رمز عبور، اجباری است.')
        } else if (newrepearpasswoed !== password) {
            seterrorrepeatpassword('تکرار رمزعبور، باید دقیقاً مشابه رمزعبور باشد.')
        } else {
            seterrorrepeatpassword('')
        }
    };

    function handelcity(event) {
        const newcity = event.target.value;
        setcity(newcity)

        if (!newcity) {
            seterrorcity('شهر محل سکونت، باید حتماً یکی از شهرهای موجود باشد.')
        } else {
            seterrorcity('')
        }
    };

    function handelgender(event) {
        const newgender = event.target.value;
        setgender(newgender)

        if (!newgender) {
            seterrorgender('جنسیت، باید یکی از مقادیر موجود باشد.')
        } else {
            seterrorgender('')
        }
    };

    function handelcheckbox(event) {
        const value = event.target.value;
        const checked = event.target.checked;
        const wasselect = checkbox.includes(value);
        let newCheckbox = [...checkbox];

        if (!wasselect && checked) {
            newCheckbox.push(value);
        }
        if (wasselect && !checked) {
            newCheckbox = newCheckbox.filter((check) => check !== value);
        }

        setcheckbox(newCheckbox);

        if (!newCheckbox.length) {
            seterrorcheckbox('مشخص کردن حداقل یک مهارت اجباری است.')
        } else {
            seterrorcheckbox('')
        }
    };

    function handelsubmit(event) {
        event.preventDefault();

        if (!name || !email || !password || !city || !gender || !checkbox) {

            if (!name) {
                seterrorname('نام و نام خانوادگی اجباری است.')
            } else {
                seterrorname('')
            }

            if (!email) {
                seterroremail('ایمیل، اجباری است.');
            } else if (!emailRegex.test(email)) {
                seterroremail('ساختار ایمیل معتبر نیست.');
            } else if (previousemail.includes(email)) {
                seterroremail('ایمیل وارد شده تکراری است.')
            } else {
                seterroremail('');
            }

            if (!password) {
                seterrorpassword('رمز عبور، اجباری است.')
            } else if (password.length < 8) {
                seterrorpassword('طول رمزعبور باید حداقل 8 کاراکتر باشد.')
            } else if (!passwordRegex.test(password)) {
                seterrorpassword('رمزعبور باید حداقل شامل یک حرف بزرگ انگلیسی، یک حرف کوچک انگلیسی و یک عدد باشد.')
            } else if (previouspassword.includes(password)) {
                seterrorpassword('رمز عبور وارد شده، در لیست رمزهای عبور ضعیف است.')
            } else {
                seterrorpassword('')
            }

            if (!repeatpassword) {
                seterrorrepeatpassword('تکرار رمز عبور، اجباری است.')
            } else if (repeatpassword !== password) {
                seterrorrepeatpassword('تکرار رمزعبور، باید دقیقاً مشابه رمزعبور باشد.')
            } else {
                seterrorrepeatpassword('')
            }

            if (!city) {
                seterrorcity('شهر محل سکونت، باید حتماً یکی از شهرهای موجود باشد.')
            } else {
                seterrorcity('')
            }

            if (!gender) {
                seterrorgender('جنسیت، باید یکی از مقادیر موجود باشد.')
            } else {
                seterrorgender('')
            }

            if (!checkbox) {
                seterrorcheckbox('مشخص کردن حداقل یک مهارت اجباری است.')
            } else {
                seterrorcheckbox('')
            }
        } else {
            console.log('Register Successful')
        }
    }

    function handelreset() {
        setname('');
        setemail('');
        setpassword('');
        setrepeatpassword('');
        setcity('');
        setgender('');
        setcheckbox('');
    }

    return (
        <div className="main">
            <form>
                <label>
                    <p>نام و نام خانوادگی خود را وارد کنید</p>
                    <input type="text" placeholder='نام و نام خانوادگی خود را به فارسی تایپ کنید' onInput={HandleInput} required onChange={handelname} />
                </label>
                <p>{errorname}</p><br />
                <label>
                    <p>ایمیل خود را وارد کنید</p>
                    <input type="email" placeholder='ایمیل خود را وارد کنید' required onChange={handelemail} />
                </label>
                <p>{erroremail}</p><br />
                <label>
                    <p>رمز خود را وارد کنید</p>
                    <input type="password" placeholder='رمز خود را وارد کنید' required onChange={handelpassword} />
                </label>
                <p>{errorpassword}</p><br />
                <label>
                    <p>رمز خود را دوباره وارد کنید</p>
                    <input type="password" placeholder='رمز خود را دوباره وارد کنید' required onChange={handelrepeatpassword} />
                </label>
                <p>{errorrepeatpassword}</p><br />
                <select onClick={handelcity}>
                    <option value="">نامشخص</option>
                    <option value="Tehran">تهران</option>
                    <option value="Ahvaz">اهواز</option>
                    <option value="Lorestan">لرستان</option>
                    <option value="Tabriz">تبریز</option>
                    <option value="Mashhad">مشهد</option>
                </select>
                <p>{errorcity}</p><br />
                <div className='man'>
                    <label><input name="raido" type="radio" value="men" onClick={handelgender} /> مرد</label>
                    <label><input name="raido" type="radio" value="women" onClick={handelgender} /> زن</label>
                    <label><input name="raido" type="radio" value="prefer not to say" onClick={handelgender} /> نامشخص</label>
                </div>
                <p>{errorgender}</p><br />
                <label><input type="checkbox" onClick={handelcheckbox} value={'Html'} /> Html</label>
                <label><input type="checkbox" onClick={handelcheckbox} value={'Java script'} /> Javscript</label>
                <label><input type="checkbox" onClick={handelcheckbox} value={'Css'} /> CSS</label>
                <label><input type="checkbox" onClick={handelcheckbox} value={'React'} /> React</label>
                <label><input type="checkbox" onClick={handelcheckbox} value={'Frontend'} /> Frontend</label>
                <label><input type="checkbox" onClick={handelcheckbox} value={'Backend'} /> Backend</label>
                <label><input type="checkbox" onClick={handelcheckbox} value={'Vue'} /> Vue</label>
                <label><input type="checkbox" onClick={handelcheckbox} value={'Angular'} /> Angular</label>
                <label><input type="checkbox" onClick={handelcheckbox} value={'Django'} /> Django</label>
                <label><input type="checkbox" onClick={handelcheckbox} value={'Next.js'} /> Next.js</label>
                <p>{errorcheckbox}</p><br />
                <input type="submit" value="submit" onClick={handelsubmit} />
                <input type="reset" value="reset" onClick={handelreset} />
            </form>
        </div>
    );
}


export default Form;