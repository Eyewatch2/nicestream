"use client";
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

interface ErrorField {
  field?: string;
  message?: string;
}

const ContactForm = () => {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error" | "unfilled">("idle");
  const [errorField, setErrorField] = useState<ErrorField>({});
  const [form, setForm] = useState({
    from: '',
    name: '',
    phone: '',
    body: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setErrorField({});
    setForm({ ...form, [name]: value });
  };

  const showToast = (message: string, type: "success" | "error") => {
    if (type === "success") {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  const send = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!form.from) {
      setErrorField({
        field: "from",
        message: "Por favor, introduce un email válido"
      });
      showToast("Por favor, introduce un email válido", "error");
      return;
    } else if (!/^\S+@\S+\.\S+$/.test(form.from)) {
      setErrorField({
        field: "from",
        message: "Por favor, introduce un email válido"
      });
      showToast("Por favor, introduce un email válido", "error");
      return;
    }

    if (!form.phone) {
      setErrorField({
        field: "phone",
        message: "Por favor, introduce un teléfono"
      });
      showToast("Por favor, introduce un teléfono", "error");
      return;
    } else if (!/^\d{9}$/.test(form.phone)) {
      setErrorField({
        field: "phone",
        message: "Por favor, introduce un teléfono válido"
      });
      showToast("Por favor, introduce un teléfono válido", "error");
      return;
    }
    if (!form.name) {
      setErrorField({
        field: "name",
        message: "Por favor, introduce tu nombre"
      });
      showToast("Por favor, introduce tu nombre", "error");
      return;
    }
    if (!form.body) {
      setErrorField({
        field: "body",
        message: "Por favor, introduce un mensaje"
      });
      showToast("Por favor, introduce un mensaje", "error");
      return;
    }

    setErrorField({});
    setFormState("loading");
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setFormState("success");
        console.log(response);
        
        showToast("Mensaje enviado con éxito!", "success");
      } else {
        setFormState("error");
        showToast("No se pudo enviar el mensaje.", "error");
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setFormState("error");
      showToast("No se pudo enviar el mensaje.", "error");
    } finally {
      setFormState("idle");
    }
  };

  const getInputClass = (field: string) => {
    const isError = errorField.field === field;
    return `bg-[#111622] rounded-full p-4 pl-5 text-white placeholder:text-white/80 mb-4 focus:shadow-[0_0_10px_1px_#25a0cd] transition-all duration-700 hover:shadow-[0_0_10px_1px_#25a0cd] focus:outline-none ${isError ? 'border border-red-500 focus:shadow-[0_0_10px_1px_#f87171] hover:shadow-[0_0_10px_1px_#f87171]' : ''
      }`;
  };

  return (
    <div className='max-w-3xl mx-auto mt-24 px-5'>
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className='mx-auto text-center mb-10 text-primary-500 text-4xl tracking-widest'>¡HABLEMOS!</h2>
      <form className='flex flex-col'>

        <label htmlFor='from' className='sr-only'>Tu email:</label>
        <input
          type="email"
          name="from"
          className={getInputClass("from")}
          placeholder='Tu email'
          value={form.from}
          onChange={handleChange}
          required
        />

        <label htmlFor='phone' className='sr-only'>Tu teléfono:</label>
        <input
          type="phone"
          name="phone"
          className={getInputClass("phone")}
          placeholder='Tu teléfono'
          value={form.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor='name' className='sr-only'>Tu Nombre:</label>
        <input
          type="text"
          name="name"
          className={getInputClass("name")}
          placeholder='Tu Nombre'
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor='body' className='sr-only'>Tu Mensaje:</label>
        <textarea
          name="body"
          className={`bg-[#111622] resize-none min-h-64 border-none rounded-3xl p-4 pl-5 text-white placeholder:text-white/80 mb-4 focus:shadow-[0_0_10px_1px_#25a0cd] transition-all duration-700 hover:shadow-[0_0_10px_1px_#25a0cd] focus:outline-none ${errorField.field === "body" ? 'border border-red-500 focus:shadow-[0_0_10px_1px_#f87171] hover:shadow-[0_0_10px_1px_#f87171]' : ''
            }`}
          placeholder='Mensaje'
          value={form.body}
          onChange={handleChange}
          required
        />


        <button
          className='linkAnimation transition-colors duration-500 after:-z-10 before:-z-10 z-30 border hover:text-primary-500 border-primary-500 text-xl font-bold uppercase rounded-full px-12 py-4 mx-auto mt-10'
          type="submit"
          onClick={send}
        >
          {formState === "idle" && <span>Enviar Mensaje</span>}
          {formState === "loading" && <span>Enviando...</span>}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
