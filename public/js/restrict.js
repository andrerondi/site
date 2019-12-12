$(function() 
{
	// EXIBIR MODAIS
	$("#btn_add_course").click(function()
	{
		clearErrors();
		$("#form_course")[0].reset();
		$("#course_img_path").attr("src", "");
		$("#modal_course").modal();
	});

	$("#btn_add_member").click(function()
	{
		clearErrors();
		$("#form_member")[0].reset();
		$("#member_photo_path").attr("src", "");
		$("#modal_member").modal();
	});

	$("#btn_add_service").click(function()
	{
		clearErrors();
		$("#form_service")[0].reset();
		$("#service_img_path").attr("src", "");
		$("#modal_service").modal();
	});

	$("#btn_add_user").click(function()
	{
		$("#modal_user").modal();
	});

	$("#btn_upload_course_img").change(function()
	{
		uploadImg($(this), $("#course_img_path"), $("#course_img"));
	});

	$("#btn_upload_member_photo").change(function()
	{
		uploadImg($(this), $("#member_photo_path"), $("#memer_photo"));
	});

	$("#btn_upload_service_img").change(function()
	{
		uploadImg($(this), $("#service_img_path"), $("#service_img"));
	});

	$("#forn_course").submit(function() 
	{
		$.ajax(
		{
			type: "POST",
			url: BASE_URL + "restrict/ajax_save_course",
			dataType: "json",
			data: $(this).serialize(),
			beforeSend: function()
			{
				clearErrors();
				$("#btn_save_course").siblings(".help-block").html(loadingImg("Verificando..."));
			},
			success: function(response)
			{
				clearErrors();
				if (response["status"])
				{
					$("#modal_course").modal("hide");
				}
				else
				{
					showErrorsModal(response["error_list"]);
				}
			}
		})
		return false;
	})

	$("#forn_member").submit(function() 
	{
		$.ajax(
		{
			type: "POST",
			url: BASE_URL + "restrict/ajax_save_member",
			dataType: "json",
			data: $(this).serialize(),
			beforeSend: function()
			{
				clearErrors();
				$("#btn_save_member").siblings(".help-block").html(loadingImg("Verificando..."));
			},
			success: function(response)
			{
				clearErrors();
				if (response["status"])
				{
					$("#modal_member").modal("hide");
				}
				else
				{
					showErrorsModal(response["error_list"]);
				}
			}
		})
		return false;
	})

	$("#forn_service").submit(function() 
	{
		$.ajax(
		{
			type: "POST",
			url: BASE_URL + "restrict/ajax_save_service",
			dataType: "json",
			data: $(this).serialize(),
			beforeSend: function()
			{
				clearErrors();
				$("#btn_save_service").siblings(".help-block").html(loadingImg("Verificando..."));
			},
			success: function(response)
			{
				clearErrors();
				if (response["status"])
				{
					$("#modal_service").modal("hide");
				}
				else
				{
					showErrorsModal(response["error_list"]);
				}
			}
		})
		return false;
	})
})