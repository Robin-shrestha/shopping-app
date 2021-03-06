# Generated by Django 3.1 on 2020-09-04 05:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shopapi', '0006_salehistory'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='salehistory',
            name='price',
        ),
        migrations.RemoveField(
            model_name='salehistory',
            name='product_id',
        ),
        migrations.RemoveField(
            model_name='salehistory',
            name='product_name',
        ),
        migrations.AddField(
            model_name='salehistory',
            name='product',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.RESTRICT, to='shopapi.saleitems'),
        ),
        migrations.AddField(
            model_name='saleitems',
            name='in_stock',
            field=models.BooleanField(default=True),
        ),
    ]
