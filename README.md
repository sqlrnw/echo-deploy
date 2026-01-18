# Echo Deploy – CI/CD Environments & Secrets Training

هذا المشروع **مش هدفه التطبيق نفسه**،  
هدفه تدريب عملي على **GitHub Actions CI/CD** مع:

- Environments
- Secrets
- Staging vs Production
- ci gating قبل الـ Deploy
- Manual approval للـ Production

---

## 🎯 هدف المشروع

التدريب على شكل **Production-style CI/CD pipeline** بدون:
- Docker
- Cloud
- Servers حقيقية

لكن بنفس المفاهيم اللي بتستخدم في الشركات.

---

## 🧱 اللي اتعلّمته في المشروع

### 1️⃣ الفصل بين CI و CD
- **CI (Continuous Integration)**:
  - تشغيل lint
  - تشغيل tests
  - التأكد إن الكود سليم
- **CD (Continuous Deployment/Delivery)**:
  - نشر الكود في بيئات مختلفة
  - استخدام secrets
  - التحكم في وقت النشر

> مفيش Deploy إلا بعد CI ناجح.

---

### 2️⃣ ci كـ Gate للـ CD
استخدمنا:
```yaml
on:
  workflow_run:
    workflows: ["ci"]
    types: [completed]

