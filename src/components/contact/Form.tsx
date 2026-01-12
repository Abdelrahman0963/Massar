import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { toast } from 'react-hot-toast';

type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

const Form = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>();

    const { t } = useTranslation();

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const res = await fetch("https://formspree.io/f/mzddbzzd", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                toast.success("Message sent successfully!");
                reset();
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        } catch (err) {
            alert("Network error. Please try again.");
        }
    };

    return (
        <motion.div
            initial={{
                y: 20, opacity: 0
            }}
            whileInView={{
                y: 0, opacity: 1
            }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
                duration: 0.6,
                delay: 0.6,
                ease: "easeOut",
            }}
            className="bg-[#171717] md:w-1/2 w-full p-4! rounded-xl border border-white/10">
            <form
                className="w-full flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label>{t("Name")}</label>
                <input
                    className="bg-[#212121] rounded-md p-2! border border-white/10"
                    {...register("name", { required: true })}
                    placeholder={t("Name")}
                />
                {errors.name && <span className="text-red-500 text-sm">{t("Name is required")}</span>}

                <label>{t("Email")}</label>
                <input
                    type="email"
                    className="bg-[#212121] rounded-md p-2! border border-white/10"
                    {...register("email", { required: true })}
                    placeholder={t("Email")}
                />
                {errors.email && <span className="text-red-500 text-sm">{t("Email is required")}</span>}

                <label>{t("Phone Number")}</label>
                <input
                    className="bg-[#212121] rounded-md p-2! border border-white/10"
                    {...register("phone")}
                    placeholder={t("Phone Number")}
                />

                <label>{t("Message")}</label>
                <textarea
                    className="bg-[#212121] rounded-md p-2! border border-white/10"
                    {...register("message", { required: true })}
                    placeholder={t("Message")}
                />
                {errors.message && (
                    <span className="text-red-500 text-sm">{t("Message is required")}</span>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full p-3! cursor-pointer bg-white text-black rounded-lg text-sm hover:bg-gray-200 transition"
                >
                    {isSubmitting ? "Sending..." : t("Send Message")}
                </button>
            </form>
        </motion.div>
    );
};

export default Form;
