# Generated by Django 3.1 on 2020-09-04 06:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shopapi', '0008_salehistory_date_bought'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salehistory',
            name='date_bought',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
